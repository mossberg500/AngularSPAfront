export class Category {
    id: number;
    title: string;
    completedCount : number;
    uncompletedCount : number;

  // ? не обязательный для передачи параметров
  constructor(id: number, title: string, completedCount?: number, uncompletedCount?: number) {
    this.id = id;
    this.title = title;
    this.completedCount = completedCount;
    this.uncompletedCount = uncompletedCount;
  }
}
