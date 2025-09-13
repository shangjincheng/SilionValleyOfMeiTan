declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.svg' {
    const content: string; // 对于通过 import 引入的 SVG，视为字符串（适用于大多数场景）
    export default content;
}