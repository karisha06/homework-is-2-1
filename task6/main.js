const create_circle_list = () => {
    const radiuses = [];
    let numCircles = parseInt(prompt("Введите количество кругов:"));

    for (let i = 1; i <= numCircles; i++) {
        let radius = parseFloat(prompt(`Введите радиус для круга ${i}:`));
        radiuses.push(radius);
    }

    const circles = radiuses.map(radius => ({ radius: radius, area: Math.PI * radius * radius }));

    return circles;
};

const circleList = create_circle_list();
console.log(circleList);