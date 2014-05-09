react-hover-scroll
================

**React Mixin For Disabling Pointer Events**

# Usage

1. Load `react-hover-scroll.js` onto your page. After the `react.js`, but before you own ReactCode code.
2. Add the mixin to your root React component: `mixins: [ReactHoverScrollMixin],`.
3. Find a suitable class name for disabling pointer events (default: `disable-hover`). And add the following code to your `CSS`: `.disable-hover { pointer-events: none !important; }` this is what disables the pointer events.
4. Add the class to the 'root' node of your app (usually first `div` tag), as shown in the example below.

```
var MyApp = React.createClass({
  mixins: [ReactHoverScrollMixin],
  render: function () {
    var createListItem = function (item, index) {
      return <li className='listItem' key={index}>{item}</li>;
    };
    
    
    var hoverEnabled = (this.props.HS_active) ? this.props.HS_class : null; // 4.1 set a variable to hold our class name if user is not scrolling
    return (
      <div className={hoverEnabled}> // 4.2 add the class to the root node
        <ul>
          { this.props.list.map(createListItem) }
        </ul>
      </div>
    );
  }
});
```

# Options
* `HS_time: 500ms (default)`: This is the time taken to re-enable the hover styles
* `HS_class: 'disable-hover' (default)`: This is the `CSS` class name used.

If you want to use your own configuration class you will have to do something like:
`React.renderComponent(MyApp({ HS_time: 300, HS_class: 'disable__hover'}), nodeToMount);`
