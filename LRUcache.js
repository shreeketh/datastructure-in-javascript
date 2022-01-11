/**
 * @param {number} capacity
 */

class LRUCache {
    constructor(capacity) {
        this.size = capacity;
        // initialize a map to store data
        this.cache = new Map()
    }

    get(key) {
        // proceed only if key exist
        if (this.cache.has(key)) {
            // rearrange and return data
            var data = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, data)
            return (data == undefined ? -1 : data)
        }
        return -1
    }

    put(key, value) {
        // if key already exist - just rearrange the order
        if (this.cache.has(key)) {
            this.cache.set(key, value)
            this.get(key)
            return
        }
        // if cache size exceeds the limit, just delete the first one and insert the new
        if (this.cache.size == this.size) {
            var firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }

        this.cache.set(key, value)
    }
}

