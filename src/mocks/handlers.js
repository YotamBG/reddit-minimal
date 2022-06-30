import { rest } from 'msw'
import { examplePopularResponse, exampleInterestingasfuckResponse, exampleWowResponse} from '../ExampleApiData';

export const handlers = [
    rest.get('https://www.reddit.com/r/popular.json', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(examplePopularResponse),
        )
    }),
    rest.get('https://www.reddit.com/r/interestingasfuck.json', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(exampleInterestingasfuckResponse),
        )
    }),
    rest.get('https://www.reddit.com/r/interestingasfuck/search.json?q=wow', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(exampleWowResponse),
        )
    })
];