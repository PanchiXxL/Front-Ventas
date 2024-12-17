export function extraerErrores(obj:any):string[]{

    if (!obj?.error?.errors) {
        return [`Error: La estructura de errores no es válida.`];
    }
    
    // return Object.keys(obj.errors).reduce((resultado: string[], campo: string) => {
    //     const mensajes = obj.errors[campo];
    //     const erroresCampo = mensajes.map((mensaje: string) => `${campo}: ${mensaje}`);
    //     return resultado.concat(erroresCampo);
    // }, []);
    
    const err = obj.error.errors;

    // const mensajes: string[] = Object.keys(err).flatMap(campo =>
    //     err[campo].map((mensaje: string) => `${campo === "$" ? "General" : campo}: ${mensaje}`)
    // );

    // return mensajes;
    let mensajeError:string[]=[];

    for (let campo in err) {
        const mensajeCampo=err[campo].map((mensaje:string)=>`${campo}: ${mensaje}`);
        mensajeError=mensajeError.concat(mensajeCampo);
    }

    return mensajeError;
}