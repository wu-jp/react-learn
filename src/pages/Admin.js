import React from "react"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Aside from "../components/Aside"

import Welcome from "./Welcome"
import StudentList from "./student/StudentList"
import StudentAdd from "./student/StudentAdd"
import CourseList from "./course/CourseList"
import CourseAdd from "./course/CourseAdd"

export default function Admin() {
  return (
    <div>
      <Layout header={<Header />} aside={<Aside />}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/students" exact component={StudentList} />
          <Route path="/students/add" exact component={StudentAdd} />
          <Route path="/courses" exact component={CourseList} />
          <Route path="/courses/add" exact component={CourseAdd} />
        </Switch>
      </Layout>
    </div>
  )
}
