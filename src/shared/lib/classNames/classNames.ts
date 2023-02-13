type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []):string => [
	cls,
	Object.keys(mods).filter((key)=> mods[key]).join(' '),
	...additional.filter(Boolean)
].join(' ').trim(); 