import {useApiFetch} from "~/composable/useApiFetch";

class TripService {
    static async getMany() {
        return await useApiFetch<Trip[]>('/trips');
    }

    static async getOne(id: number) {
        return await useApiFetch<Trip>(`/trips/${id}`)
    }
}

export default TripService;