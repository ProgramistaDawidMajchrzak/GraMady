const allBoxes = document.querySelectorAll('.boxes');

// Interfejs

let rows = 20;
let colums = 1;

let firstClass = 'sand';
let secondClass = 'grass';
let thirdClass = 'flower';
let fourthClass = 'tree';
let brokenFlower = 'brokenFlower';
let spider = 'spiderBox';

let time = 10;

// Implementacja

for (let i = 0; i < allBoxes.length; i++) {

    allBoxes[i].addEventListener('click', () => {

        const randomBox = () => {

            const nearBoxes = [allBoxes[i - rows], allBoxes[i - colums], allBoxes[i + colums], allBoxes[i + rows], allBoxes[i + rows + 1], allBoxes[i + rows - 1], allBoxes[i - rows + 1], allBoxes[i - rows - 1]];

            const nearBoxesTwo = [allBoxes[i - 2], allBoxes[i + 2], allBoxes[i + rows - 2], allBoxes[i + rows + 2], allBoxes[i - rows - 2], allBoxes[i - rows + 2], allBoxes[i - rows * 2], allBoxes[i - rows * 2 - 1], allBoxes[i - rows * 2 - 2], allBoxes[i - rows * 2 + 1], allBoxes[i - rows * 2 + 2], allBoxes[i + rows * 2], allBoxes[i + rows * 2 - 1], allBoxes[i + rows * 2 - 2], allBoxes[i + rows * 2 + 1], allBoxes[i + rows * 2 + 2]];

            const nearBoxesThree = [allBoxes[i - rows * 3], allBoxes[i - rows * 3 - 1], allBoxes[i - rows * 3 - 2], allBoxes[i - rows * 3 - 3], allBoxes[i - rows * 3 + 1], allBoxes[i - rows * 3 + 2], allBoxes[i - rows * 3 + 3], allBoxes[i + rows * 3], allBoxes[i + rows * 3 - 1], allBoxes[i + rows * 3 - 2], allBoxes[i + rows * 3 - 3], allBoxes[i + rows * 3 + 1], allBoxes[i + rows * 3 + 2], allBoxes[i + rows * 3 + 3], allBoxes[i + rows * 2 - 3], allBoxes[i + rows * 2 + 3], allBoxes[i - rows * 2 - 3], allBoxes[i - rows * 2 + 3], allBoxes[i + rows - 3], allBoxes[i + rows + 3], allBoxes[i - rows - 3], allBoxes[i - rows + 3], allBoxes[i - 3], allBoxes[i + 3]];

            const nearBoxesFour = [allBoxes[i - rows * 4], allBoxes[i - rows * 4 - 1], allBoxes[i - rows * 4 + 1], allBoxes[i + rows * 4], allBoxes[i + rows * 4 - 1], allBoxes[i + rows * 4 + 1], allBoxes[i - 4], allBoxes[i + 4], allBoxes[i - rows - 4], allBoxes[i - rows + 4], allBoxes[i + rows - 4], allBoxes[i + rows + 4]];

            nearBoxes[Math.floor(Math.random() * nearBoxes.length)].classList.add(firstClass);
            nearBoxesTwo[Math.floor(Math.random() * nearBoxesTwo.length)].classList.add(firstClass);
            nearBoxesThree[Math.floor(Math.random() * nearBoxesThree.length)].classList.add(firstClass);
            nearBoxesFour[Math.floor(Math.random() * nearBoxesFour.length)].classList.add(firstClass);

        }

        setInterval(randomBox, time);

        allBoxes[i].classList.toggle(firstClass);

    })

    setInterval(() => {
        if ($(allBoxes[i - rows]).hasClass(firstClass) &&
            $(allBoxes[i - 1]).hasClass(firstClass) &&
            $(allBoxes[i + rows]).hasClass(firstClass) &&
            $(allBoxes[i + 1]).hasClass(firstClass)) {
            allBoxes[i].classList.add(secondClass);
        }
    }, 100);
    setInterval(() => {
        if ($(allBoxes[i - rows]).hasClass(secondClass) &&
            $(allBoxes[i - 1]).hasClass(secondClass) &&
            $(allBoxes[i + rows]).hasClass(secondClass) &&
            $(allBoxes[i + 1]).hasClass(secondClass)) {
            allBoxes[i].classList.add(thirdClass);
        }
    }, 100);
    setInterval(() => {
        if ($(allBoxes[i - rows]).hasClass(thirdClass) &&
            $(allBoxes[i - 1]).hasClass(thirdClass) &&
            $(allBoxes[i + rows]).hasClass(thirdClass) &&
            $(allBoxes[i + 1]).hasClass(thirdClass)) {
            allBoxes[i].classList.add(fourthClass);
        }
    }, 100)

    const createBox = () => {
        // const spiderBox = document.createElement('div');
        const spiderBox = document.querySelectorAll('.spiderBox');
        // spiderBox.classList.add('spiderBox');
        // document.body.appendChild(spiderBox);
        // spiderBox.textContent = numberInside;
        // numberInside++
        // ------------------------


        for (let i = 0; i < spiderBox.length; i++) {

            const amountOfMove = [36, 72, 108];

            let moveX = amountOfMove[Math.floor(Math.random() * amountOfMove.length)];
            let moveY = amountOfMove[Math.floor(Math.random() * amountOfMove.length)];

            const moveLeft = () => {
                spiderBox[i].style.left = `${moveX}px`;
                moveX -= amountOfMove[Math.floor(Math.random() * amountOfMove.length)];
            }
            const moveRight = () => {
                spiderBox[i].style.left = `${moveX}px`;
                moveX += amountOfMove[Math.floor(Math.random() * amountOfMove.length)];
            }
            const moveTop = () => {
                spiderBox[i].style.top = `${moveY}px`;
                moveY -= amountOfMove[Math.floor(Math.random() * amountOfMove.length)];
            }
            const moveBottom = () => {
                spiderBox[i].style.top = `${moveY}px`;
                moveY += amountOfMove[Math.floor(Math.random() * amountOfMove.length)];
            }

            const moves = [moveLeft, moveTop, moveBottom, moveRight];

            const randomFunction = () => {
                setTimeout(moves[Math.floor(Math.random() * moves.length)], 1000);
            }
            setInterval(randomFunction, 4000);

            spiderBox[i].addEventListener('click', () => {
                spiderBox[i].style.display = 'none';
            })
        }
    }

    setInterval(() => {
        if ($(allBoxes[i - rows]).hasClass(fourthClass) &&
            $(allBoxes[i - 1]).hasClass(fourthClass) &&
            $(allBoxes[i + rows]).hasClass(fourthClass) &&
            $(allBoxes[i + 1]).hasClass(fourthClass)) {
            allBoxes[i].classList.add(spider);
            setInterval(createBox, 4000);
        }
    }, 1000)

    // if ($(allBoxes[i]).hasClass(thirdClass)) {
    //     allBoxes[i].addEventListener('click', () => {
    //         allBoxes[i].classList.add(brokenFlower);
    //     })
    // }
}

// let numberInside = 1;