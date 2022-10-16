export function onUpdate(name, selectNameType, nameType) {
    console.log('onUpdate', nameType, selectNameType, nameType);
}

export function onDelete(selectNameType, nameType) {
    const result = []
    nameType.map((el) => {
        if (!selectNameType.includes(el.id)) {
            result.push(el)
        }

    })
    return result;
}