import apiFetch from "~/shared/http";
import type Trip from "~/booking/domain/models/trip";

class TripService {
    static getMany() {
        return apiFetch<Trip[]>('/trips')
    }

    static getOne(id: number) {
        return apiFetch<Trip>(`/trips/${id}`)
    }
}

export default TripService;