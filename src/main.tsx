import ReactDOM from 'react-dom/client';
import {restaurants} from './constants/mocks';
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render([
    // JSX
    (
        <h1>JSX</h1>
    ),
    (
        <ul>
            <li>
                <h2>Ресторан: {restaurants[0].name}</h2>
                <h3>Меню:</h3>
                <ul>
                    <li>
                        {restaurants[0].menu[0].name}
                    </li>
                    <li>
                        {restaurants[0].menu[1].name}
                    </li>
                    <li>
                        {restaurants[0].menu[2].name}
                    </li>
                </ul>
                <h3>Отзывы:</h3>
                <ul>
                    <li>
                        {restaurants[0].reviews[0].text}
                    </li>
                    <li>
                        {restaurants[0].reviews[1].text}
                    </li>
                </ul>
            </li>

            <li>
                <h2>Ресторан: {restaurants[1].name}</h2>
                <h3>Меню:</h3>
                <ul>
                    <li>
                        {restaurants[1].menu[0].name}
                    </li>
                    <li>
                        {restaurants[1].menu[1].name}
                    </li>
                </ul>
                <h3>Отзывы:</h3>
                <ul>
                    <li>
                        {restaurants[1].reviews[0].text}
                    </li>
                    <li>
                        {restaurants[1].reviews[1].text}
                    </li>
                    <li>
                        {restaurants[1].reviews[2].text}
                    </li>
                </ul>
            </li>

            <li>
                <h2>Ресторан: {restaurants[2].name}</h2>
                <h3>Меню:</h3>
                <ul>
                    <li>
                        {restaurants[2].menu[0].name}
                    </li>
                    <li>
                        {restaurants[2].menu[1].name}
                    </li>
                    <li>
                        {restaurants[2].menu[2].name}
                    </li>
                </ul>
                <h3>Отзывы:</h3>
                <ul>
                    <li>
                        {restaurants[2].reviews[0].text}
                    </li>
                </ul>
            </li>

            <li>
                <h2>Ресторан: {restaurants[3].name}</h2>
                <h3>Меню:</h3>
                <ul>
                    <li>
                        {restaurants[3].menu[0].name}
                    </li>
                    <li>
                        {restaurants[3].menu[1].name}
                    </li>
                </ul>
                <h3>Отзывы:</h3>
                <ul>
                    <li>
                        {restaurants[3].reviews[0].text}
                    </li>
                    <li>
                        {restaurants[3].reviews[1].text}
                    </li>
                </ul>
            </li>
        </ul>
    ),

    // createElement
    React.createElement("h1", {children: "createElement"}),
    React.createElement("ul", {
        children: [
            React.createElement("li", {
                children: [
                    React.createElement("h2", {children: `Ресторан: ${restaurants[0].name}`}),
                    React.createElement("h3", {children: "Меню:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[0].menu[0].name}),
                            React.createElement("li", {children: restaurants[0].menu[1].name}),
                            React.createElement("li", {children: restaurants[0].menu[2].name})
                        ]
                    }),
                    React.createElement("h3", {children: "Отзывы:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[0].reviews[0].text}),
                            React.createElement("li", {children: restaurants[0].reviews[1].text}),
                        ]
                    })
                ]
            }),
            React.createElement("li", {
                children: [
                    React.createElement("h2", {children: `Ресторан: ${restaurants[1].name}`}),
                    React.createElement("h3", {children: "Меню:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[1].menu[0].name}),
                            React.createElement("li", {children: restaurants[1].menu[1].name}),
                        ]
                    }),
                    React.createElement("h3", {children: "Отзывы:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[1].reviews[0].text}),
                            React.createElement("li", {children: restaurants[1].reviews[1].text}),
                            React.createElement("li", {children: restaurants[1].reviews[2].text}),
                        ]
                    })
                ]
            }),
            React.createElement("li", {
                children: [
                    React.createElement("h2", {children: `Ресторан: ${restaurants[2].name}`}),
                    React.createElement("h3", {children: "Меню:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[2].menu[0].name}),
                            React.createElement("li", {children: restaurants[2].menu[1].name}),
                            React.createElement("li", {children: restaurants[2].menu[2].name})
                        ]
                    }),
                    React.createElement("h3", {children: "Отзывы:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[2].reviews[0].text}),
                        ]
                    })
                ]
            }),
            React.createElement("li", {
                children: [
                    React.createElement("h2", {children: `Ресторан: ${restaurants[3].name}`}),
                    React.createElement("h3", {children: "Меню:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[3].menu[0].name}),
                            React.createElement("li", {children: restaurants[3].menu[1].name}),
                        ]
                    }),
                    React.createElement("h3", {children: "Отзывы:"}),
                    React.createElement("ul", {
                        children: [
                            React.createElement("li", {children: restaurants[3].reviews[0].text}),
                            React.createElement("li", {children: restaurants[3].reviews[1].text}),
                        ]
                    })
                ]
            }),
        ],
    })
])
;
