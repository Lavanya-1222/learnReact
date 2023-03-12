import Conred from "./constructor&render";
import GetDerivedStateFromProps from './getDerivedStateFromProps'
import ComponentDidMount from './componentdidmount'
import UpdateingGetDerivedStateFromProps from './updatingGetDerivedStateFromProps'
import GetSnapshotBeforeUpdate from './updatinggetsnapshotbeforeupdate'
import ShouldComponentUpdate from "./updatingShouldComponentUpdate";
import ComponentDidUpdate from "./updatingcomponentdidupdate";
import ComponentWillUnmount from "./umountingcomponentwillunmount"
function App(){

  return <><Conred/>
  <GetDerivedStateFromProps facolor='yellow'/>
  <ComponentDidMount/>
  <UpdateingGetDerivedStateFromProps facolor='Yellow'/>
  <GetSnapshotBeforeUpdate />
  <ShouldComponentUpdate/>
  <ComponentDidUpdate/>
  <ComponentWillUnmount/>
  </>
}
export default App