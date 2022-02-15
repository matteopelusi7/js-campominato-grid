const gridWrapper = document.querySelector('.grid-container');
const button = document.getElementById('button');

button.addEventListener('click', function() {
    
    const select = document.getElementById('livello');
    let typeSelect = select.value;

    switch (typeSelect) {
    
        case '0':
            typeSelect = '0';
            break;
        case '1':
            typeSelect = '1';
            break;
        case '2':
            typeSelect = '2';
            break;
    
    }

    if ( typeSelect == '0' ) {

        for ( let i = 1; i <= 100; i++ ) {
            
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = 'calc( 100% / 10 )'
            grid.append(i);
            
            gridWrapper.appendChild(grid);
            
        }

    }

    if ( typeSelect == '1' ) {

        for ( let i = 1; i <= 81; i++ ) {
            
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = 'calc( 100% / 9 )'
            grid.append(i);
            
            gridWrapper.appendChild(grid);
            
        }

    }

    if ( typeSelect == '2' ) {

        for ( let i = 1; i <= 49; i++ ) {
            
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = 'calc( 100% / 7 )'
            grid.append(i);
            
            gridWrapper.appendChild(grid);
            
        }

    }

})