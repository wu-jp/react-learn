import store from "./index"
import { change } from "./actions/student/searchCondition"
import { fetchStudents } from "./actions/student/searchResult"

store.dispatch(fetchStudents())
setTimeout(() => {
  store.dispatch(change({ sex: 1, key: "123" }))
  store.dispatch(fetchStudents())
}, 1000)
