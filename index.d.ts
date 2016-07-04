export interface Nvim extends NodeJS.EventEmitter {
  uiAttach(width: number, height: number, rgb: boolean, cb?: Function): void;
  uiDetach(cb?: Function): void;
  uiTryResize(width: number, height: number, cb?: Function): void;
  quit(): void;
  command(str: string): Promise<void>;
  feedkeys(keys: string, mode: string, escape_csi: boolean): Promise<void>;
  input(keys: string): Promise<number>;
  replaceTermcodes(str: string, from_part: boolean, do_lt: boolean, special: boolean): Promise<string>;
  commandOutput(str: string): Promise<string>;
  eval(str: string): Promise<Object>;
  callFunction(fname: string, args: Array<RPCValue>): Promise<Object>;
  strwidth(str: string): Promise<number>;
  listRuntimePaths(): Promise<Array<string>>;
  changeDirectory(dir: string): Promise<void>;
  getCurrentLine(): Promise<string>;
  setCurrentLine(line: string): Promise<void>;
  delCurrentLine(): Promise<void>;
  getVar(name: string): Promise<Object>;
  setVar(name: string, value: Object): Promise<Object>;
  delVar(name: string): Promise<Object>;
  getVvar(name: string): Promise<Object>;
  getOption(name: string): Promise<Object>;
  setOption(name: string, value: Object): Promise<void>;
  outWrite(str: string): Promise<void>;
  errWrite(str: string): Promise<void>;
  reportError(str: string): Promise<void>;
  getBuffers(): Promise<Array<Buffer>>;
  getCurrentBuffer(): Promise<Buffer>;
  setCurrentBuffer(buffer: Buffer): Promise<void>;
  getWindows(): Promise<Array<Window>>;
  getCurrentWindow(): Promise<Window>;
  setCurrentWindow(window: Window): Promise<void>;
  getTabpages(): Promise<Array<Tabpage>>;
  getCurrentTabpage(): Promise<Tabpage>;
  setCurrentTabpage(tabpage: Tabpage): Promise<void>;
  subscribe(event: string): Promise<void>;
  unsubscribe(event: string): Promise<void>;
  nameToColor(name: string): Promise<number>;
  getColorMap(): Promise<Object>;
  getApiInfo(): Promise<Array<RPCValue>>;
  equals(lhs: Nvim): boolean;
}
export interface Buffer {
  lineCount(): Promise<number>;
  getLine(index: number): Promise<string>;
  setLine(index: number, line: string): Promise<void>;
  delLine(index: number): Promise<void>;
  getLineSlice(start: number, end: number, include_start: boolean, include_end: boolean): Promise<Array<string>>;
  getLines(start: number, end: number, strict_indexing: boolean): Promise<Array<string>>;
  setLineSlice(start: number, end: number, include_start: boolean, include_end: boolean, replacement: Array<string>): Promise<void>;
  setLines(start: number, end: number, strict_indexing: boolean, replacement: Array<string>): Promise<void>;
  getVar(name: string): Promise<Object>;
  setVar(name: string, value: Object): Promise<Object>;
  delVar(name: string): Promise<Object>;
  getOption(name: string): Promise<Object>;
  setOption(name: string, value: Object): Promise<void>;
  getNumber(): Promise<number>;
  getName(): Promise<string>;
  setName(name: string): Promise<void>;
  isValid(): Promise<boolean>;
  insert(lnum: number, lines: Array<string>): Promise<void>;
  getMark(name: string): Promise<Array<number>>;
  addHighlight(src_id: number, hl_group: string, line: number, col_start: number, col_end: number): Promise<number>;
  clearHighlight(src_id: number, line_start: number, line_end: number): Promise<void>;
  equals(lhs: Buffer): boolean;
}
export interface Window {
  getBuffer(): Promise<Buffer>;
  getCursor(): Promise<Array<number>>;
  setCursor(pos: Array<number>): Promise<void>;
  getHeight(): Promise<number>;
  setHeight(height: number): Promise<void>;
  getWidth(): Promise<number>;
  setWidth(width: number): Promise<void>;
  getVar(name: string): Promise<Object>;
  setVar(name: string, value: Object): Promise<Object>;
  delVar(name: string): Promise<Object>;
  getOption(name: string): Promise<Object>;
  setOption(name: string, value: Object): Promise<void>;
  getPosition(): Promise<Array<number>>;
  getTabpage(): Promise<Tabpage>;
  isValid(): Promise<boolean>;
  equals(lhs: Window): boolean;
}
export interface Tabpage {
  getWindows(): Promise<Array<Window>>;
  getVar(name: string): Promise<Object>;
  setVar(name: string, value: Object): Promise<Object>;
  delVar(name: string): Promise<Object>;
  getWindow(): Promise<Window>;
  isValid(): Promise<boolean>;
  equals(lhs: Tabpage): boolean;
}
export function attach(writer: NodeJS.WritableStream, reader: NodeJS.ReadableStream): Promise<Nvim>;

export type RPCValue = Buffer | Window | Tabpage | number | boolean | string | any[] | {[key:string]: any};
