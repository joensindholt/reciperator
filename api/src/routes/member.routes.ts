import Repository = require('../member.repository');
import Routes = require('./routes');

export class MemberRoutes extends Routes.Routes {

    memberRepository: Repository.MemberRepository;

    constructor(db: any, router: any) {
        this.memberRepository = new Repository.MemberRepository(db);
        super(router, "members", this.memberRepository);
    }
}
