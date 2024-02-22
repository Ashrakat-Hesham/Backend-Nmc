import newsModel from "../../../DB/model/news&events/newsPageimgs.model.js";
import cloudinary from "../../utils/cloudinary.js";
import { asyncHandler } from "../../utils/errorHandling.js";
//                                                                  images
export const addNews = asyncHandler(async (req, res, next) => {
    let x = [];
    if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
            const element = req.files[i];
            await cloudinary.uploader.upload(element.path, { folder: 'news Images' })
                .then((result) => x.push({ public_id: result?.public_id, secure_url: result?.secure_url }))
                .catch(err => console.log(err, 'err'))
        }
        req.body.images = x;
    }
    const newsPageImages = await newsModel.create(req.body)
    return res.status(201).json({ message: 'Done', newsPageImages })
})
export const getNews = asyncHandler(async (req, res, next) => {
    const allData = await newsModel.find({})
    return res.json({ mesage: 'Done', allData })
})
export const updateNews = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const news = await newsModel.findById(id)
    console.log(news);
    if (!news) {
        return res.json({ mesage: 'not found' })
    }
    if (req.files) {
        let x = [];
        console.log(req.files);
        for (let i = 0; i < req.files.length; i++) {
            const element = req.files[i];
            await cloudinary.uploader.upload(element.path, { folder: `news + ${element[i]?.visit}` })
                .then(async (result) => {
                    console.log(result, 'result');
                    x.push({ public_id: result.public_id, secure_url: result.secure_url })
                    await cloudinary.uploader.destroy(news?.images[i]?.public_id)
                })
                .catch(err => console.log(err, 'err'))
        }
        req.body.images = x;
    }
    console.log(req.body);
    const allData = await newsModel.findByIdAndUpdate(id, req.body, { new: true })
    return res.json({ mesage: 'Done', allData })
})
export const getSpecificNews = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const newsData = await newsModel.findById(id)
    console.log(newsData);
    return res.json({ mesage: 'Done', newsData })
})

