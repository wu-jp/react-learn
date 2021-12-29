import React, { Component } from "react"
import Form from "./Form/index"

export default class test extends Component {
  submit = value => {
    window.alert(`Id:${value.loginId}  Pwd:${value.loginPwd}`)
  }
  render() {
    return (
      <div>
        <Form submitFormData={this.submit}>
          <div>
            姓名：
            <Form.FormInput name="loginId" type="text" />
            密码：
            <Form.FormInput name="loginPwd" type="password" />
            <Form.FormButton />
          </div>
          <div></div>
        </Form>
      </div>
    )
  }
}
