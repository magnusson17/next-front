export default function clearString(string) {
    return string.toLowerCase().replace(/\s+/g, '-')
}