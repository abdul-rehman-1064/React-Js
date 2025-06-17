import { useState ,useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'

function App() {

  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')


  useEffect(() => {

    const controller = new AbortController(); // Previous request cancellation

    (async ()=>{
      try {
        setLoading(true)
        setError("")
        // const response = await axios.get('/api/products')
        const response = await axios.get('/api/products?search=' + search , {
          signal: controller.signal // Attach the abort signal
        })
        console.log(response.data);
        
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)) {
          //request was canceled and send to the catch block
          console.log('Request canceled', error.message);
          return; // Exit if the request was canceled
        }
        setError(error)
        setLoading(false)
      }

    })()

    // Cleanup function to cancel the request if the component unmounts or search changes
    return () => {
      controller.abort(); // Cancel the request on cleanup
    }
  },[search]);
 
  // const {products,error,loading}= customReactQuery('/api/products')

  if(error){
    return <h2 style={{color:"red"}}>Error: {error.message}</h2>
  }

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <>
     <h1>CUSTOM API AND AXIOS</h1>
     {/* {error && <h2 style={{color:"red"}}>Error: {error.message}</h2>}
      {loading && (<h2>Loading...</h2>)} */}

      <input type="text" name="" id=""
      placeholder='Search products'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
     <h2>Number of products are : {products.length}</h2>

      <div className="products">
        {
          products.map((product)=>{
            return <Card id = {product.id} price={product.price} image = {product.image} name = {product.name} />
          })
        }
      </div>
     
    </>
  )
}

export default App

// const customReactQuery = (urlPath)=>{
//    const [products, setProducts] = useState([])
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     (async ()=>{
//       try {
//         setLoading(true)
//         setError("")
//         const response = await axios.get(urlPath)
//         console.log(response.data);
//         setProducts(response.data)
//         setLoading(false)
//       } catch (error) {
//         setError(error)
//         setLoading(false)
//       }

//     })()
//   },[]);

//   return {products, error, loading}
// }