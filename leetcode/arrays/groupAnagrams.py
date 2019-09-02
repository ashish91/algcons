from collections import defaultdict  

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        cache = {}
        for word in sorted(strs):
            key = tuple(sorted(word))
            cache[key] = cache.get(key, []) + [word]
        return cache.values()