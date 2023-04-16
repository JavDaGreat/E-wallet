//fetch useEffect?
const storedData = localStorage.getItem('myData');


//ADD To local
const handleAdd = (newItem) => {
 ;
  localStorage.setItem('myData', JSON.stringify(newItem));
};



//Remove  switchCard?
 localStorage.removeItem('myData', JSON.stringify(CardDetail))


