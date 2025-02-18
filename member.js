function skillsMember() {
    var member = new Member();
    member.skills.push(new Skill("JavaScript", 3));
    member.skills.push(new Skill("HTML", 2));
    member.skills.push(new Skill("CSS", 2));
    member.skills.push(new Skill("Java", 3));
    return member;
}