import { Challenge } from "../../src/domain/entities/challenge";
import { ChallengesRepository } from "../../src/repositories/ChallengesRepository";

export class InMemoryChallengesRepository implements ChallengesRepository {
    public items: Challenge[] = [];
    async findById(id: string): Promise<Challenge | null> {
        const challenge =  await this.items.find(challenge => challenge.id === id);
        
        if(!challenge){
            return null;
        }
        return challenge;
    }

}