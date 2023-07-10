import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css';
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>)

}

function Header() {
    return (
        <header className="header footer">
            <h1>Fast react pizza Co.</h1>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData
    const numPizzas = pizzas.length;
    return (
        <main className='menu'>
            <h2>Our menu</h2>
            {numPizzas ? (
                <React.Fragment>
                    <p>
                        This is 6  dishes which is created by
                        international sheff enjoy the taste of true love
                    </p>
                    <ul className='pizzas'>
                        {pizzaData.map((pizza) =>
                            <Pizza pizzaObj={pizza} key={pizza.name} />)}
                    </ul>
                </React.Fragment>
            ) : <p>we 're still working on our menu please come later</p>}

        </main>
    );
}

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT " : pizzaObj.price}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 3;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    if (!isOpen)
        return (
            <p>
                {`shop is closed please come after ${openHour}`}
            </p>
        )
    return (
        <footer className='footer'>
            {isOpen ?
                (<Order closeHour={closeHour} openHour={openHour} />) : (

                    null)}
        </footer>
    )
}

function Order({ closeHour, openHour }) {

    return (
        <div className='order'>
            <p>
                {` we're open upto ${closeHour}pm   from ${openHour}am `}

            </p>
            <button className='btn'>Order</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);