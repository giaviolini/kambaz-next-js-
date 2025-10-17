export default function VariablesAndConstants() {
    var functionScoped = 2;
    const blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    return(
      <><div id="wd-variables-and-constants">
        <h4>Variables and Constants</h4>
        <p>functionScoped = {functionScoped}</p><br /><p>blockScoped = {blockScoped}</p><br /><p>constant1 = {constant1}</p><hr />
        </div>
        </>
   );}
   