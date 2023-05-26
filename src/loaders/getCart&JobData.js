import { getStoredCart } from "../utilities/fakeDb";


export const jobAndCartData = async () => {
    const jobData = await fetch('featured_job.json');
    const jobs = await jobData.json();
    const appliedJob = getStoredCart();
    let newArr = [];
    for (const id in appliedJob) {
        const foundJob = jobs?.find(job => parseInt(job.id) === parseInt(id));

        if (foundJob) {
            newArr.push(foundJob);
        }
    }
    return { newArr, jobs };
}

