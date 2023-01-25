import Library from '../models/Library.js' 
  
 export const getLibrary= async (req, res) => { 
     try { 
         const library = await Library
         .find({ id: req.params.id }) 
         .populate('id') 
         .select('nameofbook author id') 
         if (library.length !== 0) 
             res.status(200).json(library) 
         else 
             res.status(204).send() 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const getLibrary = async (req, res) => { 
     try { 
         const { id } = req.params 
         const library = await Library.findById(id) 
         .populate('id') 
         .select('nameofbook author id') 
         if (library) 
             res.status(200).json(curriculum) 
         else 
             res.status(404).json({ error: 'resource not found'}) 
     } catch (err) { 
         res.status(500).json({ error: err.message}) 
     } 
 } 
  
 export const addLibrary = async (req, res) => { 
     try { 
         const { nameofbook, author} = req.body 
         const id = req.params.id 
         const newLibrary = await Library.create({ 
             nameofbook, 
             author, 
             id 
         }) 
         const savedLibrary = await newLibrary.save() 
         res.status(201).json({ id: savedLibrary._id }) 
     } catch (err) { 
     res.status(500).json({ error: err.message}) 
     }    
 } 
  
 export const deleteLibrary = async (req, res) => { 
     try { 
         await Library.deleteOne({ 
             id: req.params.id, 
             _id: req.params.id 
         }) 
         res.status(204).send() 
     } catch (err) { 
     res.status(404).json({ error: err.message}) 
     } 
 } 
  
 export const updateLibrary = async (req, res) => { 
     try { 
         const filter = { 
             id: req.params.id, 
             _id: req.params.id 
         } 
         const { nameofbook, author} = req.body 
         const update = { 
             nameofbook: nameofbook, 
             author: author
         } 
         await Library.findOneAndUpdate(filter, update) 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message}) 
     } 
 }
