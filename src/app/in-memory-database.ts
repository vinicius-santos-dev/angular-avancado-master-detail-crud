import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
  public createDb() {
    const categories: Category[] = [
      {
        id: 1,
        name: 'Moradia',
        description: 'Pagamentos de contas de casa',
      },
      {
        id: 2,
        name: 'Saúde',
        description: 'Plano de saúde e remédios',
      },
      {
        id: 3,
        name: 'Lazer',
        description: 'Cinema, parques, praia, etc.',
      },
      {
        id: 4,
        name: 'Salário',
        description: 'Recebimento de salário',
      },
      {
        id: 5,
        name: 'Criptomoedas',
        description: 'Ativos digitais',
      },
    ];

    const entries: Entry[] = [
      {
        id: 1,
        name: 'Gás de cozinha',
        categoryId: categories[0].id,
        category: categories[0],
        paid: true,
        date: '13/06/2021',
        amount: '70,00',
        type: 'expense',
        description: 'Qualquer descrição',
      } as Entry,
      {
        id: 2,
        name: 'Uber',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '18/06/2021',
        amount: '10,00',
        type: 'expense',
        description: 'Qualquer descrição',
      } as Entry,
      {
        id: 3,
        name: 'Passeio no parque',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '18/06/2021',
        amount: '75,00',
        type: 'expense',
        description: 'Qualquer descrição',
      } as Entry,
      {
        id: 4,
        name: 'Consulta',
        categoryId: categories[1].id,
        category: categories[1],
        paid: false,
        date: '13/05/2021',
        amount: '180,00',
        type: 'expense',
        description: 'Qualquer descrição',
      } as Entry,
      {
        id: 5,
        name: 'Salário',
        categoryId: categories[3].id,
        category: categories[3],
        paid: true,
        date: '07/05/2021',
        amount: '3000,00',
        type: 'revenue',
        description: 'Qualquer descrição',
      } as Entry,
    ];

    return { categories, entries };
  }
}
