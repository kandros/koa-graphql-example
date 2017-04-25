import {graphiqlKoa, graphqlKoa} from 'graphql-server-koa'
import * as Koa from 'koa'
import * as koaBody from 'koa-bodyparser'
import * as KoaRouter from 'koa-router'
import {schema} from './schema'

const app = new Koa()
const router = new KoaRouter()
const PORT = 3000

app.use(koaBody())

router.post('/graphql', graphqlKoa({schema}))
router.get('/graphql', graphqlKoa({schema}))
router.get('/graphiql', graphiqlKoa({endpointURL: '/graphql'}))

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
