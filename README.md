# React Hooks
## Description
In this react application, I decided to practice on some of the more lesser-known hooks that are used, specifically:
- useReducer
- useRef
- useLayoutEffect
- useImperativeHandle
- useMemo
- useCallback

### useReducer
We use this hook as an alteranative to useState, specifically when we want to handle multiple useState with one Hook. 

In this application, we can see that in our example, there are two state variables known as count and toggle. With useReducer, we can handle both the state variables rather than having them declared and used separately.

#### Syntax used:
const [state, dispatch] = useReducer(reducer, initialArg, init);

### useRef
We use this hook whenever we want to easily manipulate DOM elements. For example, to manipulate DOM elements we could use document.getElementbyId or document.getElementbyClass in vanilla javascript; however, we don't do that because REACT uses a **virtual DOM** and the state of the application should be handling this usecase.

In this application, we can see that in our example, we can solve this issue by using useRef(). We can declare a variable for our useRef and assign that variable into any of our html tags in our return statement for our component. From there we can access that variable and manipulate the DOM element. **In our case for our example:** whenever the user clicks a button, we can empty the input value and focus the input value.

#### Syntax used
const inputRef = useRef(null)
inputRef.current.value or inputRef.current.focus() (some examples of manipulating the DOM element)

### useLayoutEffect
Almost identical to useEffect; however, it is always **called before** useEffect as it is called before the render. UseEffect gets called after a page is renderd; however, in useLayoutEFfect, this hook is called before everything is shown to user.

Typically would use this function for UI based reasons, we can handle what we show to the users before any render or whatever data or function isde useEffect is called.

In our example, we use console.log to show when the useLayoutEffect is called, as well as using useEffect to change a variable upon render. We can see that useLayoutEffect is called wit hthe original variable value before useEffect changes it; thereby, displaying useLayoutEffect functionality.

#### Syntax used
useLayoutEffect(() => {}, []);

### useImperativeHandle
This hook is a bit tricky to use; however, the main concept of the hook is to allow parent components to access our child's state variables or functions. By sending in a reference with **useRef()** to our child component, this reference can then be assigned functions with the **useImperativeHandle** hook. 

In our example, we send a reference called ButtonRef to our Button Component. In our Button component, we use **forwardRef** to allow the component to grab the reference and then we use **useImperativeHandle** to allow for our component to assign functions to our reference. From there, we can access our state variable, **toggle**, from our parent component.

#### Syntax used
useImperativeHandle(ref, () => ({...})); 
//note: the second paramater is where we can assign our functions 

### useMemo
We would use this function whenever we are talking about optimization. For instance, let's say we have a function in our parent component and a button that changes the state in our state variable. Whenever we click the button, our function in our parent component also gets called, even though it has nothing to do with the updated state variable. By assigning the useMemo hook, we essentially allow for that particular function to only be called based on a dependncy, allowing for optimization in our code.

In our example, we have this scenario with a function called **getLongestName**, in which we only allow this function to be called again if there are any changes to our data state variable.

#### Syntax used
const getLongestName = useMemo(() => {findLongestName(data)}, [data])

### useCallback
Similiar to useMemo; **however**, you don't store the value that is returned from the function but the function itself. In our useMemo example, we were returning the value of findLongestName to our const getLongestName variable. In our useCallback, we're storing the function not the data that is being returned.

**In our example** our returnComment is our function. if we don't use callback we run into the issue where every time a state variable in parent is changed, this function is called again. However, because we are using useCallback, we are sending the function returnComment to our Child component instead of the actaul value. From there, the child component will use the particular function

#### Syntax
const returnComment = useCallback((name) => {return data + name;}, [data])
