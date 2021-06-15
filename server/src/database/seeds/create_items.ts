import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Agendado', image: 'clock.png' },
        { title: 'Expresso', image: 'hourglass.png' },
        { title: 'Á domicílio', image: 'home.png' },
        { title: 'Salão', image: 'shop.png' },
        { title: 'Evento', image: 'musical_note.png' },
        { title: 'Outros Serviços', image: 'scissors.png' },
    ]);
}