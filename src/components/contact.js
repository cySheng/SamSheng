import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/contact.module.scss"

const Contact = () => (
  <section className={styles.contact}>
    <div>
      <h2>Contact Us</h2>
      <ul>
        <li>
          Email: <a href="mailto:samsheng@gmail.com">samsheng@gmail.com</a>
        </li>
        <li>
          Github: <a href="https://github.com/sammiepls">Sammie</a>
          <a href="https://github.com/cySheng">Sheng</a>
        </li>
      </ul>
    </div>
  </section>
)

export default Contact
