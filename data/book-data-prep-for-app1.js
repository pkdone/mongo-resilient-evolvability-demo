db = db.getSiblingDB('library');
db.books.drop();
db.books.createIndex({title: 1, author: 1}, {unique: true});
db.books.createIndex({author: 1, year: -1});
db.books.createIndex({title: 1});
db.books.createIndex({year: -1});
var now = new Date();
db.books.insertMany([
    {
        'title': 'The Last Man',
        'author': 'Mary Shelley',
        'year': NumberInt(1826),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'When Worlds Collide',
        'author': 'Philip Wylie & Edwin Balmer',
        'year': NumberInt(1933),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'Earth Abides',
        'author': 'George R. Stewart',
        'year': NumberInt(1949),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'The Day of the Triffids',
        'author': 'John Wyndham',
        'year': NumberInt(1951),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'The Kraken Wakes',
        'author': 'John Wyndham',
        'year': NumberInt(1953),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'The Chrysalids',
        'author': 'John Wyndham',
        'year': NumberInt(1955),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'I Am Legend',
        'author': 'Richard Matheson',
        'year': NumberInt(1954),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'The Long Tomorrow',
        'author': 'Leigh Brackett',
        'year': NumberInt(1955),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'The Death of Grass',
        'author': 'John Christopher',
        'year': NumberInt(1956),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'The World in Winter',
        'author': 'John Christopher',
        'year': NumberInt(1962),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'A Wrinkle in the Skin',
        'author': 'John Christopher',
        'year': NumberInt(1965),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'Tripods Trilogy',
        'author': 'John Christopher',
        'year': NumberInt(1967),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'On the Beach',
        'author': 'Nevil Shute',
        'year': NumberInt(1957),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'The Black Cloud',
        'author': 'Fred Hoyle',
        'year': NumberInt(1957),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'Level 7',
        'author': 'Mordecai Roshwald',
        'year': NumberInt(1959),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'Alas, Babylon',
        'author': 'Pat Frank',
        'year': NumberInt(1959),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'A Canticle for Leibowitz',
        'author': 'Walter M. Miller, Jr.',
        'year': NumberInt(1959),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'Hothouse',
        'author': 'Brian Aldiss',
        'year': NumberInt(1961),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'Some Will Not Die',
        'author': 'Algis Budrys',
        'year': NumberInt(1961),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'The Drowned World',
        'author': 'J. G. Ballard',
        'year': NumberInt(1962),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '21',
        'title': "Cat's Cradle",
        'author': 'Kurt Vonnegut',
        'year': NumberInt(1963),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '22',
        'title': 'The Sheep Look Up',
        'author': 'John Brunner',
        'year': NumberInt(1972),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '23',
        'title': "Lucifer's Hammer",
        'author': 'Larry Niven and Jerry Pournelle',
        'year': NumberInt(1977),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '24',
        'title': 'The Stand',
        'author': 'Stephen King',
        'year': NumberInt(1978),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'title': 'Engine Summer',
        'author': 'John Crowley ',
        'year': NumberInt(1979),
        'quantity': NumberInt(1),
    },    
    {
        'title': 'Down to a Sunless Sea',
        'author': 'David Graham',
        'year': NumberInt(1979),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '27',
        'title': 'Riddley Walker',
        'author': 'Russell Hoban',
        'year': NumberInt(1980),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '28',
        'title': 'Emergence',
        'author': 'David R. Palmer',
        'year': NumberInt(1984),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '29',
        'title': 'The Postman',
        'author': 'David Brin',
        'year': NumberInt(1985),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '30',
        'title': 'This Is the Way the World Ends',
        'author': 'James K. Morrow',
        'year': NumberInt(1985),
        'quantity': NumberInt(1),
    },    
    {
        'id': '31',
        'title': 'Swan Song',
        'author': 'Robert R. McCammon',
        'year': NumberInt(1987),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '32',
        'title': 'The Children of Men',
        'author': 'P. D. James',
        'year': NumberInt(1992),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '33',
        'title': 'The Ice People',
        'author': 'Maggie Gee',
        'year': NumberInt(1998),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '34',
        'title': 'Dies the Fire',
        'author': 'S. M. Stirling',
        'year': NumberInt(2004),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '35',
        'title': 'The Road',
        'author': 'Cormac McCarthy',
        'year': NumberInt(2006),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '36',
        'title': 'The Year of the Flood',
        'author': 'Margaret Atwood',
        'year': NumberInt(2009),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '37',
        'title': 'One Second After',
        'author': 'William R. Forstchen',
        'year': NumberInt(2009),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '38',
        'title': 'Far North',
        'author': 'Marcel Theroux',
        'year': NumberInt(2009),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '39',
        'title': 'Wool',
        'author': 'Hugh Howey',
        'year': NumberInt(2011),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '40',
        'title': 'Shift',
        'author': 'Hugh Howey',
        'year': NumberInt(2013),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '41',
        'title': 'Dust',
        'author': 'Hugh Howey',
        'year': NumberInt(2014),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
    {
        'id': '42',
        'title': 'Station Eleven',
        'author': 'Emily St. John Mandel',
        'year': NumberInt(2014),
        'quantity': NumberInt(1),
        'first_created': now,
        'last_modified': now,        
    },
]);
