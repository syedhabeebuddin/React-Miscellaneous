const chars=['a','b','c','d'];
const items=chars.map((char) => 
          <li>{char}</li>);

ReactDOM.render(
    <ul>{items}</ul>,mountNode
);  
