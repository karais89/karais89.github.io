---
title: "[리뷰] 객체지향 사고 프로세스"
authors: [karais89]
tags: [book]
---

![book image](./30.jpg)

# 기간

7일

# 목적

우선 온라인에서 종이책으로 구입 함. 조금 할인을 많이 하여, 살만한 책이 없나 찾아보다가 객체지향 이란 제목에 끌려 바로 구입을 함. 개발을 하다보면 이게 맞는 개발 방법인가? 라는 생각이 계속해서 드는 시점이 왔는데.. 조금은 도움이 되지 않을까 싶어 구입을 하게 됨.

# 리뷰

책이 좀 여러 챕터로 구성되어 있다.

12챕터 까지 구성되어 있고, 기본적인 객체지향 개념. 클래스 설계 지침. 상속과 합성 관련된 내용. 프레임워크에 대한 내용등. 좀 얇고 넓게 전체적인 내용을 다룬것으로 보인다.

보통 책의 번역에 대해 얘기를 잘 안하는 편인데. 이 책의 역자는 좀 번역 자체에 신경을 많이 쓴걸로 보인다. 베타 리더의 의견도 많이 참고하고, 기존  소스들도 조금 더 보기 쉽게 수정한 부분들이 있고 번역 관련된 단어에 신경을 많이 쓴걸로 보여 책 자체를 읽기에 부담이 없었다.

5판 까지 나온 책이라. 오랫동안 계속 사랑 받아 온 것으로 보인다.

> 이 책의 저자는 객체지향 프로그래밍을 기술 수준이 아닌 개념 수준, 더 나아가서는 철학 수준에서부터 고찰하고 있다.

### 책에서 다루는 내용

- 이 책은 객체지향적으로 생각하는 방법을 다루고 있다. 객체지향 개발을 한마디로 말한다면 생각하는 방식이다.
- 독자가 객체지향적으로 생각하게 하는 데 초점을 맞추었다.

### 주요 내용

- 객체지향 개념은 크게 캡슐화, 상속, 다형성, 합성으로 이루어진다고 보면 된다.
- 객체는 속성과 행위라는 두 가지 성분으로 정의된다.
- 객체지향 방식에는 데이터와 행위를 훌륭하고 완전한 패키지인 객체로 결합함으로써 데이터 제어 문제를 해결할 수 있다.
- 일반적으로 객체는 다른 객체의 내부 데이터를 조작해서는 안된다.
- 일반적으로 큰 객체를 만들어 많은 작업을 하기보다는 작은 객체를 만들어 특정 작업만 감당하게 하는게 좋다.
- 메서드는 다른 객체에서 호출된 행위(메시지)를 구현하거나 클래스의 기본 내부 행위를 제공할 수 있다.
- 메시지는 객체 간의 소통 메커니즘이다.
- 인터페이스가 올바르게 설계된 경우에는 구현부가 변경되어도 사용자 코드를 변경하지 않아도 된다.
- 행위를 직접 상속하기보다는 인터페이스를 상속하는 편이 더 일반적이다(전자는 상속이고 후자는 구현에 해당한다). 데이터/모델을 주로 상속받고, 행위를 주로 구현하는 경향이 있다.
- 상속은 is-a 관계, 합성은 has-a 관계.

### 결론

챕터는 여러개이긴 한데 결국 같은 내용의 반복이라는 생각은 지울 수 없는 것 같긴 하다.

디자인 패턴및 SOLID는 간단히 맛만 보는 정도로 보여주고 있다.

계속 반복되는 코드(동물, 자동차 등)를 예로 들어 설명하는 부분이 오히려 좋았던 부분 인 것 같다.

결국 저자가 강조하는 부분은 상속 보다는 합성을 사용하자로 정리할 수 있다.

아래 간단히 책에 나오는 주요 예제 코드를 정리하였다. 실제 동작하지 않는 수도 코드라는 점은 참고 하자.

### 상속을 사용하지 않고, 합성을 사용한 예제

```csharp
// 상속을 사용하지 않고, 합성을 사용한 예
class Mammal {
  public void eat() { print("I am Eating"); };
}
class Walkable {
  public void walk() { print("I am walking"); };
}
class Flyable {
  public void fly() { print("I am flying"); };
}
class Dog {
  Mammal dog = new Mammal();
  Walkable walker = new Walkable();

  // 위임
  public void eat() { dog.eat(); }
  public void walk() { walker.walk(); }
}
class Bat {
  Mammal bat = new Mammal();
  Flyable flyer = new Flyable();

  // 위임
  public void eat() { bat.eat(); }
  public void fly() { flyer.fly(); }
}

void main() {
  Dog fido = new Dog();
  fido.dog.eat();
  fido.walker.walk();

  Bat brown = new bat();
  brown.eat();
  brown.fly();
}
```

### 의존성 주입 예제

```csharp
class Mammal {
  public void eat() { print("I am Eating"); };
}

class Walkable implements IWalkable {
  public void walk() { print("I am walking"); };
}

interface IWalkable {
  public void walk();
}

// mammal은 상속받고 IWalkable은 구현으로 처리
class Dog extends Mammal implements IWalkable {
  IWalkable walker;
  
  public Dog(IWalkable w) {
    this.walker = w;
  }
  
  public void walk() {
    walker.walk();
  }
}

void main() {
  Dog fido = new Dog(new Walkable()); // 의존성 주입 
  fido.walk();
  fido.eat();
}
```

### 의존성 주입 예제 2

```csharp
void main() {
  Mammal cat = new Mammal(new CatNoise());
  Mammal dog = new Mammal(new DogNoise());

  cat.makeNoise();
  dog.makeNoise();
}

class Mammal {
  MakingNoise speaker;

  public Mammal(MakingNoise sb) {
    speaker = sb;
  }

  public string makeNoise() {
    return speaker.makeNoise();
  }
}

interface MakingNoise { public string makeNoise(); }
class CatNoise implements MakingNoise { public string makeNoise() { return "Meow"; } }
class DogNoise implements MakingNoise { public string makeNoise() { return "Bark"; } }
```

- Cat, Dog 클래스를 만들지 않고 mammal 에서 해당 처리를 함.

# 평점 및 한줄평

기초 적인 내용 위주였지만, 다시 한번 객체 지향에 대해 생각해 볼 수 있었던 것 같다.

4/5