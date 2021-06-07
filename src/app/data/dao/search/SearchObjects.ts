
//все возможные параметры поиска категорий
export class CategorySearchValues {
  title: string = null;
}

//все возможные параметры поиска приоритетов
export class PrioritySearchValues {
  title: string = null;
}


//все возможные параметры поиска
export class TaskSearchValues {

  //начальные значения по-умолчанию
  title = '';
  completed : number = null;
  priorityId : number = null;
  categoryId : number = null;
  pageNumber = 0;
  pageSize = 5;

  //сортировка
  sortColumn = 'title';
  sortDirection = 'asc';


}
