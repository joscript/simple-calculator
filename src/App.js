import "./style.css";
import "./App.css";

function App() {
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>123,900 *</div>
        <div className='current-operand'>123,123</div>
      </div>

      <button className='col-two btn-fn'>AC</button>
      <button className='btn-fn'>DEL</button>
      <button className='btn-operator'>÷</button>
      <button className='btn-number'>1</button>
      <button className='btn-number'>2</button>
      <button className='btn-number'>3</button>
      <button className='btn-operator'>*</button>
      <button className='btn-number'>4</button>
      <button className='btn-number'>5</button>
      <button className='btn-number'>6</button>
      <button className='btn-operator'>+</button>
      <button className='btn-number'>7</button>
      <button className='btn-number'>8</button>
      <button className='btn-number'>9</button>
      <button className='btn-operator'>-</button>
      <button className='btn-fn'>%</button>
      <button className='btn-number'>0</button>
      <button className='btn-fn'>.</button>
      <button className='btn-operator'>=</button>
    </div>
  );
}

export default App;
