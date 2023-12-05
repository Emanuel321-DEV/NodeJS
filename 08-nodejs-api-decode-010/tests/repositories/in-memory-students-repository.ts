import { Student } from "../../src/domain/entities/student";
import { StudentsRepository } from "../../src/repositories/StudentsRepository";

export class InMemoryStudentsRepository implements StudentsRepository {
    public items: Student[] = [];
    async findById(id: string): Promise<Student | null> {
        const student =  await this.items.find(student => student.id === id);
        
        if(!student){
            return null;
        }
        return student;
    }

}