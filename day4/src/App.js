import UseEffect from "./useEffect";
import UseEffectAfterUpdate from "./useEffectAfterUpdate";
import UseEffectMultiple from "./useEffectMultiple";
import UseEffectOnCondition from "./useEffectOnCondition";
function App(){
let address="solapur";
  return <><UseEffect/>
  <UseEffectAfterUpdate/>
  <UseEffectMultiple/>
  <UseEffectOnCondition data={address}/>
  </>
}
export default App