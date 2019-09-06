/**
 * “student. a am I” 正确的句子应该是“I am a student.”
 */
function ReverseSentence(str)
{
    if(!str){
        return ""
    }
    return str.split(' ').reverse().join(' ')
}