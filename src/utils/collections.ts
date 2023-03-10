export namespace CollectionsUtils {

    export class Queue<T> {
        private data: T[] = [];

        enqueue(item: T) {
            this.data.push(item);
        }

        dequeue(): T | undefined {
            return this.data.shift();
        }

        length(): number {
            return this.data.length;
        }
    };

}