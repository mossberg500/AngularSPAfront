// тестовые данные (заменяют таблицу БД)

import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#d1bf6e'},
    {id: 3, title: 'Высокий', color: '#bd7f3b'},
    {id: 4, title: 'Очень высокий', color: '#F1128D'},
  ];

  // индексация объектов начинается с нуля
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2021-03-24')
    },
    {
      id: 2,
      title: 'Передать отчёты начальнику управления',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2021-04-11')
    },
    {
      id: 3,
      title: 'Убраться у себя в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
    },
    {
      id: 4,
      title: 'Сходить в парк с семьёй, пригласить друзей',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2020-08-20')
    },
    {
      id: 5,
      title: 'Найти и выучить учебник по квантовой физике',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Сходить на семинар по программированию',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2021-04-10')
    },
    {
      id: 7,
      title: 'Найти билеты, выбрать отель',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3],
    },
    {
      id: 8,
      title: 'Приготовить ужин для всей семьи',
      completed: false,
      category: TestData.categories[5],
    },
    {
      id: 9,
      title: 'Подтянуться 10 раз',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2021-03-12')
    },
    {
      id: 10,
      title: 'Пробежать 100 м',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4],
    },
    {
      id: 14,
      title: 'Провести собрание',
      completed: true,
      category: TestData.categories[0],
    },
    {
      id: 15,
      title: 'Сдать экзамен по Java',
      priority: TestData.priorities[2],
      completed: true
    },
    {
      id: 16,
      title: 'Положить 100 000 на депозит',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6],
    },
    {
      id: 17,
      title: 'Забрать зарплату с работы',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6],
    },
    {
      id: 18,
      title: 'Сдать анализы',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2021-02-28')
    }
  ];
}
