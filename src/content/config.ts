import {defineCollection, z} from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        url: z.string(),
        sampleText: z.string(),
        title: z.string(),
        image: z.string().optional(),
    })
});

const knowledgeCollection = defineCollection({
    type: "data",
    schema: z.array(z.object({
        name: z.string(),
        icon: z.string(),
    }))
})


export const collections = {
    projects: projectsCollection,
    knowledge: knowledgeCollection,
}