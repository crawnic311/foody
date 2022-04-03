require('dotenv').config
const { CONNECTION_STRING } = process.env

const Sequelize = require('sequelize')

// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

//sequalize returns an array of two indexes, index 0 is the result of your query, index 1 is meta data
module.exports = {
  addUser: async (req, res) => {
    //console.log(req)
    const { id } = req.params

    const { email, password } = req.body
    //Can't remember what this does??
    /*const result = await sequelize.query(
      `insert into users (name, email, password)
        values ('${name}', '${email}', '${password}')`
    )*/
    sequelize
      .query(
        `insert into users ( email, password)
        values ('${email}', '${password}')`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err))
    console.log(res)
  },

  addRecipe: async (req, res) => {
    console.log(111, req.body)
    const {
      title,
      image,
      description,
      servings,
      prepTime,
      cookTime,
      instructions,
      user_id,
      navID,
    } = req.body
    sequelize
      .query(
        `insert into recipes (title, image, description, servings, prepTime, cookTime, instructions, user_id, navID)
    values ('${title}', '${image}', '${description}', '${servings}', '${prepTime}', '${cookTime}', '{"${instructions[0]}","${instructions[1]}"}', '${user_id}', '${navID}')`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err))
    console.log(res)
  },

  getRecipe: async (req, res) => {
    sequelize
      .query(`select * from recipes`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err))
    console.log(res)
  },

  getUserID: async (req, res) => {
    sequelize
      .query(`select * from users`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err))
    console.log(res)
  },

  deleteRecipe: async (req, res) => {
    const { id } = req.params
    console.log(id)
    sequelize
      .query(`delete from recipes where id = ${id}`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err))
  },

  getUpcomingAppointments: (req, res) => {
    sequelize
      .query(
        `select a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
        from cc_appointments a
        join cc_emp_appts ea on a.appt_id = ea.appt_id
        join cc_employees e on e.emp_id = ea.emp_id
        join cc_users u on e.user_id = u.user_id
        where a.approved = true and a.completed = false
        order by a.date desc;`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err))
  },
}
