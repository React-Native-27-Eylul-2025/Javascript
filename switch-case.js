// switch(<value>) {
//      case <value1>:
//          ...;
//          break;
//      case <value2>:
//          ...
//          break;
//      default:
//          default durum kodu;

const theDay = "salı"

switch(theDay) {
    case "pazartesi":
        console.log("Bugün günlerden pazartesi");
        break;
    case "salı":
        console.log("Bugün günlerden salı");
        break;
    default:
        console.log("Pazartesi veya salı değil")
}

