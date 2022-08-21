import client from "@/api/umi-request";
import type { StackType } from "@/models/StackType";


export function stackInfo() {
    return client.get('/stack')
}

export function updateStack(data:StackType[]) {
    return client.post('/stack',{data})
}