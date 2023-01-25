import Id from "../models/Id.js" 
  
 export const getId = async (req, res) => { 
     try { 
         const id = await Id.find() 
         if (id.length !== 0) 
             res.status(200).json(id) 
         else 
             res.status(204).send() 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const getId = async (req, res) => { 
     try { 
         const { id } = req.params 
         const id = await Id.findById(id) 
         if (id) 
             res.status(200).json(member) 
         else 
             res.status(404).json({ error: 'resource not found' })  
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const addId = async (req, res) => { 
     try { 
         const { id, fullName, address, age, sex, mobileNo.} = req.body 
         const newId = await Id.create({ 
             id, 
             fullName, 
             address, 
             age, 
             sex, 
             mobileNo, 
       
         }) 
         const savedId = await newId.save() 
         res.status(201).json({ id: savedId._id }) 
     } catch (err) { 
         res.status(500).json({ error: err.message})     
     } 
 } 
  
 export const deleteId = async (req, res) => { 
     try { 
         await Id.deleteOne({ _id: req.params.id }) 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 } 
  
 export const updateId = async (req, res) => { 
     try { 
         const filter = { _id: req.params.id } 
         const { id, fullName, address, age, sex, mobileNo} = req.body 
         const update = { 
             id: id, 
             fullName: fullName, 
             address: address, 
             age: age, 
             sex: sex, 
             mobileNo: mobileNo
        
         } 
  
         await Id.findOneAndUpdate(filter, update) 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message}) 
     } 
 }
 
