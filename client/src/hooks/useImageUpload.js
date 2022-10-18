
export const useImageUpload = () => {

    const imagecedula = async (formData)  => {

        await fetch('/api/img/imgsave',{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(window.location.replace("/"))
        .catch(err => console.log(err));
       
   
     
        //setIdCedula(json);
    }

    return { imagecedula }
}